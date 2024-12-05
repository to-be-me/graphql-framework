import * as Lo from 'lodash'
import * as Logger from '../lib/logger'
import * as Plugin from '../lib/plugin'
import * as Schema from './schema'
import * as Server from './server'

const log = Logger.create({ name: 'app' })

// todo the jsdoc below is lost on the destructured object exports later on...
export interface App {
  /**
   * [API Reference](https://www.nexusjs.org/#/api/modules/main/exports/logger)  ⌁  [Guide](todo)
   *
   * ### todo
   */
  log: Logger.Logger
  /**
   * [API Reference](https://www.nexusjs.org/#/api/modules/main/exports/server)  ⌁  [Guide](todo)
   *
   * ### todo
   *
   */
  server: Server.Server
  /**
   * todo
   */
  settings: Settings
  /**
   * [API Reference](https://www.nexusjs.org/#/api/modules/main/exports/schema) // [Guide](todo)
   *
   * ### todo
   */
  schema: Schema.Schema
}

type SettingsInput = {
  logger?: Logger.SettingsInput
  schema?: Schema.SettingsInput
  server?: Server.ExtraSettingsInput
}

export type SettingsData = Readonly<{
  logger: Logger.SettingsData
  schema: Schema.SettingsData
  server: Server.ExtraSettingsData
}>

/**
 * todo
 */
export type Settings = {
  /**
   * todo
   */
  original: SettingsData
  /**
   * todo
   */
  current: SettingsData
  /**
   * todo
   */
  change(newSetting: SettingsInput): void
}

/**
 * Crate an app instance
 */
export function create(): App {
  const state: {
    plugins: Plugin.RuntimeContributions[]
    isWasServerStartCalled: boolean
  } = {
    plugins: [],
    isWasServerStartCalled: false,
  }

  const server = Server.create()
  const schema = Schema.create()

  const settings: Settings = {
    change(newSettings) {
      if (newSettings.logger) {
        log.settings(newSettings.logger)
      }
      if (newSettings.schema) {
        schema.private.settings.change(newSettings.schema)
      }
      if (newSettings.server) {
        Object.assign(settings.current.server, newSettings.server)
      }
    },
    current: {
      logger: log.settings,
      schema: schema.private.settings.data,
      server: Server.defaultExtraSettings,
    },
    original: Lo.cloneDeep({
      logger: log.settings,
      schema: schema.private.settings.data,
      server: Server.defaultExtraSettings,
    }),
  }

  const api: App = {
    log: log,
    settings: settings,
    schema: schema.public,
    server: {
      express: server.express,
      /**
       * Start the server. If you do not call this explicitly then nexus will
       * for you. You should not normally need to call this function yourself.
       */
      async start() {
        const graphqlSchema = await schema.private.makeSchema(state.plugins)

        // Track the start call so that we can know in entrypoint whether to run
        // or not start for the user.
        state.isWasServerStartCalled = true

        await server.setupAndStart({
          settings: settings,
          schema: graphqlSchema,
          plugins: state.plugins,
          contextContributors: schema.private.state.contextContributors,
        })
      },
      stop() {
        return server.stop()
      },
    },
  }

  // Private API :(
  const api__: any = api

  api__.__state = state

  api__.__use = function (pluginName: string, plugin: Plugin.RuntimePlugin) {
    state.plugins.push(Plugin.loadRuntimePlugin(pluginName, plugin))
  }

  return api
}

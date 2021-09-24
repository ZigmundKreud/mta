// Import Modules
import {DataLoader} from "./data.js";

/**
 * Ready hook loads tables, and override's foundry's entity link functions to provide extension to pseudo entities
 */

Hooks.once("ready", async () => {

    console.debug("Importing data");

    // DataLoader.loadData("wod-mta", "/modules/wod-mta/data/json/fr", "backgrounds");

    console.info("MTA Module Initialized.");
});

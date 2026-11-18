import { mytest, expect } from './Fixture/loginfixture.js';

mytest("Dashboard Test", async ({ loginPage }) => {
    await loginPage.getByPlaceholder("Enter ARN Number").fill("N0000500000");

});
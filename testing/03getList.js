const { Builder, By } = require("selenium-webdriver");

const getListElementsText = async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.w3schools.com/");

    const allElements = await driver.findElements(By.className("ga-nav"));

    for (const element of allElements) {
        const elementText = await element.getText();
        console.log(elementText);
    }

    driver.quit();
};

getListElementsText();

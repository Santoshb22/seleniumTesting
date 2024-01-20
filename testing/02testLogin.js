const {Builder, Key, By} = require("selenium-webdriver");

const testLogin = async () => {

    const driver = await new Builder().forBrowser("chrome").build()

    await driver.get("https://moviemaxgpt.web.app/")

    const getLoginEmailElement = await driver.findElement(By.id("email"))
    getLoginEmailElement.sendKeys("sb24300@gamil.com")

    const getLoginPasswordElement = await driver.findElement(By.id("password"))
    getLoginPasswordElement.sendKeys("mypassword", Key.RETURN);

    const loginErr = await driver.findElement(By.className("text-red-500")).getText()

    if(loginErr === "Password is not valid") {
        console.log("Login err test case PASS")
    } else {
        console.log("Actual err msg is ", loginErr)
    }

    driver.quit();
}

testLogin();
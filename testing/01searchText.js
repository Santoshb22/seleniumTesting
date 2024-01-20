//requiring from selenium webdriver
const {By, Builder, Key} = require('selenium-webdriver');

//async function to perform testing task
const testingFunc = async () =>{

    try {
        //selecting browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigating to website
    await driver.get("https://shopcart-22.web.app/");

    //finding element of navigated website
   let getElement =  await driver.findElement(By.id("Search"));
   
   //sending value to elemnt and enter return 
   getElement.sendKeys("Electronics", Key.RETURN)

   //to slow down execution
   await driver.sleep(5000)

   //quiting website
   driver.quit();

    } catch (error) {
        console.log(`Error: ${error}`)
    }

}

testingFunc();
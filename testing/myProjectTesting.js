const { Builder, By, Key, until } = require("selenium-webdriver");

const testProject = async () => {
  let driver;
  try {
    driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://shopcart-22.web.app/");

    const searchInput = await driver.findElement(By.id("Search"));
    searchInput.sendKeys("Electronics", Key.RETURN);
    console.log("search Product. Test Pass")

    const divElement = await driver.wait(until.elementLocated(By.id("14")), 5000);
    divElement.click()
    console.log("Click to view product detail. Test Pass")

    const addBtn = await driver.wait(until.elementLocated(By.id("addBtn")),6000)        
    if(addBtn){
        addBtn.click()
        console.log("Add Product to cart. Test Pass")
    } else{
        console.log("Button not found")
    }

    const cartBtn = await driver.findElement(By.id("cart"))
    cartBtn.click()
    console.log("Goto cart. Test Pass")

    const addSameItem  = await driver.wait(until.elementLocated(By.id("sameItemAdd")),3000)
    addSameItem.click();
    console.log("Add sameItem from cart. Test Pass")

    const removeSameItem  = await driver.findElement(By.id("sameItemRemove"))
    removeSameItem.click();
    console.log("Remove sameItem by 1 from cart. Test Pass")

    const removeFromCart  = await driver.findElement(By.id("removeProduct"))
    removeFromCart.click();
    console.log("Remove Product from cart. Test Pass")

  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await driver.quit();
  }
};

testProject();

async function orderfood(name, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name + "Prepared")
        },time);
    });
}

async function restaurant() {
    console.log("Task Started");
    let pizza = await orderfood("Pizza" , 1000);
    console.log(pizza);
    const burger= await orderfood("Burger", 2000);
    console.log(burger);
    console.log("All Order Completed");
}
restaurant();
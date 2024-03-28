// Code your solution here
const findMatching =function (drivers, name) {
    return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase())
}

const fuzzyMatch = function(drivers, beginsWith) {
    return drivers.filter(driver =>
        driver.toLowerCase().startsWith(beginsWith.toLowerCase())
    );
};


const matchName = function(drivers, name) {
    return drivers.filter(driver =>
        driver.name === name
    );
};
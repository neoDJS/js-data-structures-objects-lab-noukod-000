// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  let newdriver = {...driver};
  delete newdriver[key];
}

function destructivelyDeleteFromDriverByKey(driver, key){

}

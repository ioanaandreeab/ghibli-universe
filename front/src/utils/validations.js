const regex_email = /^[A-Za-z]{1,}[a-zA-Z0-9_.-]+@[a-zA-Z]+\.[a-zA-Z]{1,}$/;
const regex_name = "([A-ZĂÎȘȚÂ])+(?=.{1,40}$)[a-zA-ZĂÎȘȚÂăîșț]+(?:[-\\s][a-zA-ZĂÎȘȚÂăîșțâ]+)*$";

module.exports = {regex_email, regex_name};
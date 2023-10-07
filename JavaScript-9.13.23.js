
/*Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.  */
const domainName = (url) => url.replace(/.+\/\/|www.|\..+/g, ‘’);

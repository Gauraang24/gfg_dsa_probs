// Input:
// IPv4 address = 222.111.111.111
// Output: 1

// Input:
// IPv4 address = 5555..555
// Output: 0

const ip = "222.a11.111.111";

const validIpAddress = (ip) => {
  let currentElement;
  for (let i = 0; i < ip.length; i++) {
    console.log("a", ip[i], typeof parseInt(ip[i]));
    if (parseInt(ip[i]) === NaN) {
      console.log("parseInt", parseInt(ip[i]));
      return 0;
    }
    if (currentElement === "." && ip[i] === ".") {
      console.log("false");
      return 0;
    }
    currentElement = ip[i];
  }
  console.log("true");
  return 1;
};

validIpAddress(ip);

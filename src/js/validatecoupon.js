
  function validate(coupon) {
    codes = new Object();
    codes.GOLD20 = 20;
    codes.GOLD = 30;
    codes.GOLD40 = 40;
    codes.GOLD50 = 50;
    console.log(coupon)
    if (codes[coupon]) {
      window.alert("Coupon Code Accepted! Click the Order button!");
    } else {
      window.alert("Sorry, The Coupon Code you entered is invalid. Please check and try again!");
    }
  }


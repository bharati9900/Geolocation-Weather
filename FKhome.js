function loadcoupon(){
    document.getElementById('coupon').style.display="block";
    document.getElementById('container').style.opacity="0.5";
    document.getElementById('topmenu').style.opacity="0.5";

  }
  const closeCoupon = () => {
    document.getElementById('coupon').style.display="none";
    document.getElementById('container').style.opacity="1";
    document.getElementById('topmenu').style.opacity="1";
  }
function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
  
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./imagen/male0001.png
     ./imagen/male0002.png
     ./imagen/male0003.png
     ./imagen/male0004.png
     ./imagen/male0005.png
     ./imagen/male0006.png
     ./imagen/male0007.png
     ./imagen/male0008.png
     ./imagen/male0009.png
     ./imagen/male0010.png
     ./imagen/male0011.png
     ./imagen/male0012.png
     ./imagen/male0013.png
     ./imagen/male0014.png
     ./imagen/male0015.png
     ./imagen/male0016.png
     ./imagen/male0017.png
     ./imagen/male0018.png
     ./imagen/male0019.png
     ./imagen/male0020.png
     ./imagen/male0021.png
     ./imagen/male0022.png
     ./imagen/male0023.png
     ./imagen/male0024.png
     ./imagen/male0025.png
     ./imagen/male0026.png
     ./imagen/male0027.png
     ./imagen/male0028.png
     ./imagen/male0029.png
     ./imagen/male0030.png
     ./imagen/male0031.png
     ./imagen/male0032.png
     ./imagen/male0033.png
     ./imagen/male0034.png
     ./imagen/male0035.png
     ./imagen/male0036.png
     ./imagen/male0037.png
     ./imagen/male0038.png
     ./imagen/male0039.png
     ./imagen/male0040.png
     ./imagen/male0041.png
     ./imagen/male0042.png
     ./imagen/male0043.png
     ./imagen/male0044.png
     ./imagen/male0045.png
     ./imagen/male0046.png
     ./imagen/male0047.png
     ./imagen/male0048.png
     ./imagen/male0049.png
     ./imagen/male0050.png
     ./imagen/male0051.png
     ./imagen/male0052.png
     ./imagen/male0053.png
     ./imagen/male0054.png
     ./imagen/male0055.png
     ./imagen/male0056.png
     ./imagen/male0057.png
     ./imagen/male0058.png
     ./imagen/male0059.png
     ./imagen/male0060.png
     ./imagen/male0061.png
     ./imagen/male0062.png
     ./imagen/male0063.png
     ./imagen/male0064.png
     ./imagen/male0065.png
     ./imagen/male0066.png
     ./imagen/male0067.png
     ./imagen/male0068.png
     ./imagen/male0069.png
     ./imagen/male0070.png
     ./imagen/male0071.png
     ./imagen/male0072.png
     ./imagen/male0073.png
     ./imagen/male0074.png
     ./imagen/male0075.png
     ./imagen/male0076.png
     ./imagen/male0077.png
     ./imagen/male0078.png
     ./imagen/male0079.png
     ./imagen/male0080.png
     ./imagen/male0081.png
     ./imagen/male0082.png
     ./imagen/male0083.png
     ./imagen/male0084.png
     ./imagen/male0085.png
     ./imagen/male0086.png
     ./imagen/male0087.png
     ./imagen/male0088.png
     ./imagen/male0089.png
     ./imagen/male0090.png
     ./imagen/male0091.png
     ./imagen/male0092.png
     ./imagen/male0093.png
     ./imagen/male0094.png
     ./imagen/male0095.png
     ./imagen/male0096.png
     ./imagen/male0097.png
     ./imagen/male0098.png
     ./imagen/male0099.png
     ./imagen/male0100.png
     ./imagen/male0101.png
     ./imagen/male0102.png
     ./imagen/male0103.png
     ./imagen/male0104.png
     ./imagen/male0105.png
     ./imagen/male0106.png
     ./imagen/male0107.png
     ./imagen/male0108.png
     ./imagen/male0109.png
     ./imagen/male0110.png
     ./imagen/male0111.png
     ./imagen/male0112.png
     ./imagen/male0113.png
     ./imagen/male0114.png
     ./imagen/male0115.png
     ./imagen/male0116.png
     ./imagen/male0117.png
     ./imagen/male0118.png
     ./imagen/male0119.png
     ./imagen/male0120.png
     ./imagen/male0121.png
     ./imagen/male0122.png
     ./imagen/male0123.png
     ./imagen/male0124.png
     ./imagen/male0125.png
     ./imagen/male0126.png
     ./imagen/male0127.png
     ./imagen/male0128.png
     ./imagen/male0129.png
     ./imagen/male0130.png
     ./imagen/male0131.png
     ./imagen/male0132.png
     ./imagen/male0133.png
     ./imagen/male0134.png
     ./imagen/male0135.png
     ./imagen/male0136.png
     ./imagen/male0137.png
     ./imagen/male0138.png
     ./imagen/male0139.png
     ./imagen/male0140.png
     ./imagen/male0141.png
     ./imagen/male0142.png
     ./imagen/male0143.png
     ./imagen/male0144.png
     ./imagen/male0145.png
     ./imagen/male0146.png
     ./imagen/male0147.png
     ./imagen/male0148.png
     ./imagen/male0149.png
     ./imagen/male0150.png
     ./imagen/male0151.png
     ./imagen/male0152.png
     ./imagen/male0153.png
     ./imagen/male0154.png
     ./imagen/male0155.png
     ./imagen/male0156.png
     ./imagen/male0157.png
     ./imagen/male0158.png
     ./imagen/male0159.png
     ./imagen/male0160.png
     ./imagen/male0161.png
     ./imagen/male0162.png
     ./imagen/male0163.png
     ./imagen/male0164.png
     ./imagen/male0165.png
     ./imagen/male0166.png
     ./imagen/male0167.png
     ./imagen/male0168.png
     ./imagen/male0169.png
     ./imagen/male0170.png
     ./imagen/male0171.png
     ./imagen/male0172.png
     ./imagen/male0173.png
     ./imagen/male0174.png
     ./imagen/male0175.png
     ./imagen/male0176.png
     ./imagen/male0177.png
     ./imagen/male0178.png
     ./imagen/male0179.png
     ./imagen/male0180.png
     ./imagen/male0181.png
     ./imagen/male0182.png
     ./imagen/male0183.png
     ./imagen/male0184.png
     ./imagen/male0185.png
     ./imagen/male0186.png
     ./imagen/male0187.png
     ./imagen/male0188.png
     ./imagen/male0189.png
     ./imagen/male0190.png
     ./imagen/male0191.png
     ./imagen/male0192.png
     ./imagen/male0193.png
     ./imagen/male0194.png
     ./imagen/male0195.png
     ./imagen/male0196.png
     ./imagen/male0197.png
     ./imagen/male0198.png
     ./imagen/male0199.png
     ./imagen/male0200.png
     ./imagen/male0201.png
     ./imagen/male0202.png
     ./imagen/male0203.png
     ./imagen/male0204.png
     ./imagen/male0205.png
     ./imagen/male0206.png
     ./imagen/male0207.png
     ./imagen/male0208.png
     ./imagen/male0209.png
     ./imagen/male0210.png
     ./imagen/male0211.png
     ./imagen/male0212.png
     ./imagen/male0213.png
     ./imagen/male0214.png
     ./imagen/male0215.png
     ./imagen/male0216.png
     ./imagen/male0217.png
     ./imagen/male0218.png
     ./imagen/male0219.png
     ./imagen/male0220.png
     ./imagen/male0221.png
     ./imagen/male0222.png
     ./imagen/male0223.png
     ./imagen/male0224.png
     ./imagen/male0225.png
     ./imagen/male0226.png
     ./imagen/male0227.png
     ./imagen/male0228.png
     ./imagen/male0229.png
     ./imagen/male0230.png
     ./imagen/male0231.png
     ./imagen/male0232.png
     ./imagen/male0233.png
     ./imagen/male0234.png
     ./imagen/male0235.png
     ./imagen/male0236.png
     ./imagen/male0237.png
     ./imagen/male0238.png
     ./imagen/male0239.png
     ./imagen/male0240.png
     ./imagen/male0241.png
     ./imagen/male0242.png
     ./imagen/male0243.png
     ./imagen/male0244.png
     ./imagen/male0245.png
     ./imagen/male0246.png
     ./imagen/male0247.png
     ./imagen/male0248.png
     ./imagen/male0249.png
     ./imagen/male0250.png
     ./imagen/male0251.png
     ./imagen/male0252.png
     ./imagen/male0253.png
     ./imagen/male0254.png
     ./imagen/male0255.png
     ./imagen/male0256.png
     ./imagen/male0257.png
     ./imagen/male0258.png
     ./imagen/male0259.png
     ./imagen/male0260.png
     ./imagen/male0261.png
     ./imagen/male0262.png
     ./imagen/male0263.png
     ./imagen/male0264.png
     ./imagen/male0265.png
     ./imagen/male0266.png

 `;
  return data.split("\n")[index];
}

const frameCount = 266;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});






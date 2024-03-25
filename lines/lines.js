function handleImage(event) {
  const canvas = document.getElementById('canvas');
  const textarea = document.getElementById('textarea');
  const inputInterval = document.getElementById('input_interval');
  const inputTextSize = document.getElementById('input_textsize');
  const inputStrokeWidth = document.getElementById('input_stroke_width');
  const inputImgWidth = document.getElementById('input_img_width');
  const ctx = canvas.getContext('2d');
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {

      const { width, height } = getSize(img, inputImgWidth.value);

      console.log(`width = ${width}, height = ${height}`)

      const inputText = textarea.value.trim()
      console.log(inputText)

      const textArray = inputText.split('\n')
      console.log(textArray)
      const count = textArray.length

      const interval = inputInterval.value;
      const lineWidth = inputStrokeWidth.value;
      const textSize = inputTextSize.value;

      // 设置canvas的宽度和高度
      canvas.width = width; // 加上叠加的间隔
      canvas.height = height + interval * (count - 1);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // 将图片叠加到canvas上
      for (let i = count; i > 0; i--) {
        console.log(`${(i - 1)}`)
        ctx.drawImage(img, 0, (i - 1) * interval, width, height);

        const textToDraw = textArray[i - 1]

        ctx.fillStyle = 'black'; // 文字颜色
        ctx.lineWidth = lineWidth;
        ctx.font = `${textSize}px Song`; // 字体大小和类型
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.strokeStyle = 'white';

        ctx.strokeText(textToDraw, width / 2, height + (i - 1) * interval - interval / 2);
        ctx.fillText(textToDraw, width / 2, height + (i - 1) * interval - interval / 2); // 文字内容和位置
      }
    };
    img.src = event.target.result;
  };

  reader.readAsDataURL(file);
}

function getSize(img, maxWidth) {

  if (img.width <= maxWidth) {
    return {
      width: img.width,
      height: img.height,
    }
  }

  const scale = maxWidth / img.width;
  const scaledWidth = maxWidth;
  const scaledHeight = img.height * scale;

  return {
    width: scaledWidth,
    height: scaledHeight,
  }
}
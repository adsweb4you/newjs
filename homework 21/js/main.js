let aray = [25,36,0,54,500] // 1) შევქმნათ მასივი
aray.push ("bolo elemnti") // 2) დავამატოთ თავში ახალი ელემენტი
aray.unshift ("pirveli elementi") // 2) დავამატოთ ბოლოში ახალი ელემენტი
aray.pop ("rame") // 3) წავშალოთ ელემენტი მასივის ბოლოში
aray.shift("dasawyisi") // 3) წავშალოთ ელემენტი მასივის დასაწყისში
aray.splice(3, 0, "shua nawili") // 4) დავამატოთ ახალი ელემენტი მასივის შუაში
function sor(a, b){
  return   a-b;
}
console.log(aray.sort(sor)) // 5) დავასორტიროთ მასივი ზრდადობით და კლებადობით

// 6) მოცემული მასივი უნდა გავუშვათ for ციკლში და გამოვიტანოთ html ში
for(let i = 0; i < aray.length; i++){
    let some = aray[i];
    document.getElementById("box").innerHTML += some;
}
// 1) შევქმნათ პროდუქტის ობიექტი შემდეგი თვისებებით
// -- დასახელება 
// -- ფოტო
// -- წონა (წონა იქნება მასივის სახით მაგ: ["5კგ", "8კგ"])

// 2) ობიექტი უნდა გამოვიტანოთ html ში ,  მის წონებთან ერთად
var product = {
  factory:"Apple",
  names: ["iphone 12 pro", "iphone 12"],
  img:['img/pro.png', "img/single.png"],
  weight: [184, 164],
  price:[4299, 3399]
}
var mycar = `<div class="card" style="width: 18rem;">
<img src="${product.img[0]}" class="card-img-top" alt="iphone 12">
<div class="card-body bg-light">
  <h5 class="card-title text-center text-capitalize">${product.names[0]}</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item bg-info">წონა: ${product.weight[0]} გრამი </li>
  <li class="list-group-item bg-warning">ბრენდი: ${product.factory}</li>
  <li class="list-group-item bg-danger">ფასი: ${product.price[0].toFixed(2)} ლარი</li>
</ul>
<div class="card-body d-flex justify-content-center">
<button type="button" class="btn btn-success">Buy Now</button>
</div>
</div>`
document.getElementById('mycard').innerHTML = mycar;

var mycar1 = `<div class="card" style="width: 18rem;">
<img src="${product.img[1]}" class="card-img-top" alt="iphone 12">
<div class="card-body bg-light">
  <h5 class="card-title text-center text-capitalize">${product.names[1]}</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item bg-info">წონა: ${product.weight[1]} გრამი </li>
  <li class="list-group-item bg-warning">ბრენდი: ${product.factory}</li>
  <li class="list-group-item bg-danger">ფასი: ${product.price[1].toFixed(2)} ლარი</li>
</ul>
<div class="card-body d-flex justify-content-center">
<button type="button" class="btn btn-success">Buy Now</button>
</div>
</div>`
document.getElementById('mycard2').innerHTML = mycar1;

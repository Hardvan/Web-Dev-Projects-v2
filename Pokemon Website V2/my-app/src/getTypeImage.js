function getTypeImage(type) {
  // TODO: Add more type images
  switch (type) {
    case "fire":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/1024px-Pok%C3%A9mon_Fire_Type_Icon.svg.png";
    case "water":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/768px-Pok%C3%A9mon_Water_Type_Icon.svg.png?20200511081703";
    case "grass":
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueGLP8b--288Tn0M-IeseJsbQ7tQZlZoA-L0azU6oh9dmUMVwtOw5ldKRdl1T7HDzueI&usqp=CAU";
    case "electric":
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yFSLfw_-W1zzTazxW7OL8cEs-TOwymcDoazu7lblCAPZm6_CUWGWxH-bAHDX34vBnLs&usqp=CAU";
    default:
      return "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.veryicon.com%2Ficons%2Fmiscellaneous%2Fcolorful-news-icon%2Fwait-for-10.html&psig=AOvVaw16qGT3348h-CH1y6kYIEzm&ust=1669686249861000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDAkpHgz_sCFQAAAAAdAAAAABAE";
  }
}

export default getTypeImage;

'use script'

const findMatch = (arr, value)=>arr.find(item => item.phone=== value)
const phonelist = document.getElementById( "phonelist" );

const userData = [ 
    {
        "username": "user1",
        "phone": "123-456-7890",
        "address": "123 Main St, Anytown, AN 12345",
        "email": "user1@example.com",
        "freeTaxt": ""
      },
      {
        "username": "user2",
        "phone": "234-567-8901",
        "address": "234 Oak St, Othertown, OT 23456",
        "email": "user2@example.net",
        "freeTaxt" : ""
      },
      {
        "username": "user3",
        "phone": "345-678-9012",
        "address": "345 Pine St, Sometown, ST 34567",
        "email": "user3@example.org",
        "freeTaxt" : ""
      },
      {
        "username": "user4",
        "phone": "456-789-0123",
        "address": "456 Elm St, Newtown, NT 45678",
        "email": "user4@example.co",
        "freeTaxt" : ""
      },
      {
        "username": "user5",
        "phone": "567-890-1234",
        "address": "567 Maple St, Yourtown, YT 56789",
        "email": "user5@example.io",
        "freeTaxt" : ""
      }
    ];

    //to render all the data have
  function rendar(data)
{ 
  data.sort((a,b)=>a.username.localeCompare(b.username))

  phonelist.innerHTML = "";
const newList = data.forEach( ( elem, ind ) => {
    const item = document.createElement( 'li' );
    item.className = "item";
    item.innerHTML = `
        <img src="./img/profile.png" alt="Contact 1" class="contact-img">
        <div class="contact-info">
            <span class="name">${elem.username}</span> <span class="name"> ${elem.phone}</span>
        </div>
        <div class="buttons">
            <button onclick ="popup(${ind})"><img src="./img/edit.png"></button>
            <button onclick ="remove(${ind})"><img src="./img/delete.png"></button>
        </div>
              `;              
            
    phonelist.append( item );
  
  } ); 
}

rendar(userData);

// remove one user name
function remove(ind)
{
  if(confirm("Are you sure you want to delete?"))
  {
    userData.splice(ind,1)
    rendar(userData);
    const popup = document.getElementById( 'myModal' );
    popup.style.display = 'none';
  }
}
//opne the pupup
  function popup( indLi ) 
  {
    
    const popup = document.getElementById( 'myModal' );
    data = userData[indLi];
    
    popup.style.display = 'flex';

    popup.querySelector( "#inputUserName" ).value = data.username;
    popup.querySelector( "#inputUserPhone" ).value = data.phone;
    popup.querySelector( "#inputUserAddress" ).value = data.address;
    popup.querySelector( "#inputUserEmail" ).value = data.email;
    popup.querySelector( "#inputUserFreeText" ).value = data.freeTaxt;
  }

//colse the pupop
  function closeModal ( event ) 
  {
    if ( event.target === document.getElementById( 'myModal' ) || event.target === document.getElementById( 'closeModalBtn' )) {
      document.getElementById( 'myModal' ).style.display = 'none';
    }
  }

// edit one user 
function Edit()
{
  const d =document;
  const newName = d.querySelector( "#inputUserName" ).value;
  const popup = document.getElementById('myModal');
  data.username =  popup.querySelector( "#inputUserName" ).value;
  data.phone = popup.querySelector( "#inputUserPhone" ).value ;
  data.address = popup.querySelector( "#inputUserAddress" ).value ;
  data.email = popup.querySelector( "#inputUserEmail" ).value;
  data.freeTaxt = popup.querySelector("#inputUserFreeText")
  rendar(userData);
}

function newAdd()
{
  const popup = document.getElementById( 'ModalAdd' );
  const newName = document.querySelector( "#inputUserNameAdd" ).value;

  const check = userData.find(x=>x.username == newName )
  if(!check){
    userData.push({username:document.querySelector( "#inputUserNameAdd" ).value,
    phone:document.querySelector( "#inputUserPhoneAdd" ).value,
    address:document.querySelector( "#inputUserAddressAdd" ).value,
    email:document.querySelector( "#inputUserEmailAdd" ).value,
    freeTaxt:document.querySelector("#inputUserFreeTextAdd")});
    rendar(userData);
  }
  else
  alert("this name already exists");
}

// open new pupup
function popupAdd()
{
  const popup = document.getElementById( 'ModalAdd' );
  popup.style.display = 'flex';
}
// close the new pupup
function closeModalAdd ( event ) 
  {
    if ( event.target === document.getElementById( 'ModalAdd' ) || event.target === document.getElementById( 'closeModalAdd' )) {
      document.getElementById( 'ModalAdd' ).style.display = 'none';
    }
  }

  // serach the user
search()
function search()
{
  const input = document.getElementById("search");

  input.oninput = ((e) =>{
    console.log(e.target.value)
    const data = userData.filter((el) => el.username.includes(e.target.value))
    rendar(data)
  });

}

// deleta all the user
function deleteAll(data)
{
  if(confirm("Are you sure you want to delete?"))
  {
    userData.forEach( ( elem, ind ) => {
      userData.splice(ind)
    })
  }
    phonelist.style.text =
    phonelist.innerHTML = "No contacts found! :("
}


  





var serialNumber = 1;
// console.log("Working")
// alert("hi")
(function(){
    document.addEventListener('DOMContentLoaded',function(){
        document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault(); // prevent the form from submitting
            var name = document.querySelector('#name').value;
            var age = document.querySelector('#age').value;
            var profession = document.querySelector('#profession').value; 
            var userData = document.querySelector(".user-data")
            var rowDiv = document.createElement("div");

            var p1 = document.createElement("p");
            p1.textContent = serialNumber;

            rowDiv.classList.add("basic-details")
            rowDiv.setAttribute("data-profession", profession);

            console.log("Working")

            rowDiv.append(p1);

            

            var p2 = document.createElement("p");
            p2.textContent = "Name:"+name;

            rowDiv.append(p2);

            var p3 = document.createElement("p");
            p3.textContent = "Profession:"+ profession;

            rowDiv.append(p3);

            var p4 = document.createElement("p");
            p4.textContent = "Age:"+age;

            rowDiv.append(p4);

            userData.append(rowDiv);

            serialNumber++;
            document.getElementById("myForm").reset(); // reset the form
        });

        document.getElementById("prof").addEventListener("change",(event)=>{
            var selectedProfession = event.target.value;
            var rows = document.getElementsByClassName("basic-details");
            for(var i=0; i<rows.length; i++)
            {
                var row = rows[i];
                if(selectedProfession=="" || row.getAttribute("data-profession")==selectedProfession){
                    row.style.display = "block";
                }
                else row.style.display = "none";
            }
        })

    });
})();
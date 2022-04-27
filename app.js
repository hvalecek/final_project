let list = [" "];

let inputEle = document.createElement("input");
inputEle.placeholder = "name...";

let inputElePass = document.createElement("input");
inputElePass.placeholder = "password...";
inputElePass.setAttribute("type", "password");

let messageEle = document.createElement("h3");

let button = document.createElement("button");
button.innerHTML = "log in";

button.addEventListener("click", function () {

    if (inputEle.value == "cool" && inputElePass.value == "password") {
        button.remove()
        inputEle.remove()
        inputElePass.remove()
        messageEle.remove()

        const pages = [
            {
                page: "grade view",
                navigate: gradeView
            },
            {
                page: "add grade",
                navigate: addGrade
            }
        ]

        function navButton(pg, pr, nv) {
            let button = document.createElement("button");
            button.innerHTML = pg;
            button.addEventListener("click", function () {
                document.body.querySelector(".wrapper").innerHTML = " "
                nv();
            })
            pr.appendChild(button);
        }

        function navigation() {
            let nav = document.createElement("nav")
            let wrapper = document.createElement("div")
            wrapper.classList.add("wrapper");
            nav.style.height = "80px";
            nav.style.backgroundColor = "blue";
            for (obj of pages) {
                // console.log(obj.name);
                navButton(obj.page, nav, obj.navigate)
            }
            document.body.appendChild(nav);
            document.body.appendChild(wrapper)
        }

        function gradeView()
        {
            gradeList()
        }


        function addGrade() {
            let messageEleNew = document.createElement("h3");


            let student = "";
            let grade = 0;

            let studentEle = document.createElement("input");
            studentEle.placeholder = "students name...";
            let gradeEle = document.createElement("input");
            gradeEle.placeholder = "grade...";
            document.body.querySelector(".wrapper").appendChild(studentEle);
            document.body.querySelector(".wrapper").appendChild(gradeEle);
            let buttonTwo = document.createElement("button");
            buttonTwo.innerHTML = "submit";
            document.body.querySelector(".wrapper").appendChild(buttonTwo)
            buttonTwo.addEventListener("click", function () {
                student = studentEle.value
                grade = gradeEle.value
                isNaN(student)
                isNaN(grade)
                if (isNaN(student) === true && isNaN(grade) === false && grade < 101) {
                    // let ele= document.createElement("div")
                    // let textEle = document.createElement("h1")
                    // textEle.innerHTML = student + " " + grade
                    // ele.appendChild(textEle)
                    // document.body.querySelector(".wrapper").appendChild(ele)
                    list.push(student + " " + grade)
                } else {
                    document.body.appendChild(messageEleNew).style.color = "red";
                    messageEleNew.innerHTML = "text must be a letter a - z AND grade 1 - 100 !!"
                    document.body.appendChild(messageEleNew);
                    document.body.querySelector(".wrapper").appendChild(messageEle)
                }
            })
            // document.body.appendChild(studentEle);
            // document.body.appendChild(gradeEle);
            // document.body.appendChild(buttonTwo);
        }

        navigation();
        gradeView();

    } else {
        document.body.appendChild(messageEle).style.color = "red";
        messageEle.innerHTML = "INCORRECT INFO !!"
    }
})
    let listGrade = document.createElement("div")

    function gradeList() {

        listGrade.innerHTML = " ";
        {
            for (let i = 0; i < list.length; i++) {
                let ele = document.createElement("div")
                ele.innerHTML = list[i]
                listGrade.appendChild(ele)
                document.body.querySelector(".wrapper").appendChild(ele)
                document.body.appendChild(listGrade)
            }
        }

}

document.body.appendChild(inputEle);
document.body.appendChild(inputElePass);
document.body.appendChild(button)
document.body.appendChild(messageEle);


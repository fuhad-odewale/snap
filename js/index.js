let fall = document.getElementsByClassName(menubtn);
let dropel = document.getElementsByClassName(dropdown)



function drop() {
    let dorp = "drop"
    fall.innertext = "  <div class="dropdown">
    <span>features <img src="images/icon-arrow-down.svg" alt=""></span> 
    <div class="dropdowncontent">
        <a href="#"> 
            <p>
                <img src="images/icon-todo.svg" alt="">
               <span class="dpc">todo list</span> 
            </p>
        </a>
        <a href="#"> 
            <p>
                <img src="images/icon-calendar.svg" alt="">
               <span class="dpc">calender</span> 
            </p>
        </a>
        <a href="#"> 
            <p>
                <img src="images/icon-reminders.svg" alt="">
               <span class="dpc">reminders</span> 
            </p>
        </a>
        <a href="#"> 
            <p>
                <img src="images/icon-planning.svg" alt="">
               <span class="dpc">planning</span> 
            </p>
        </a>
    </div>";
}

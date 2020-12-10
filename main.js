array_of_student_name = [];

function submit()
{
    var s1 = document.getElementById("student1").value;
    var s2 = document.getElementById("student2").value;
    var s3 = document.getElementById("student3").value;
    var s4 = document.getElementById("student4").value;

    array_of_student_name.push(s1);
    array_of_student_name.push(s2);
    array_of_student_name.push(s3);
    array_of_student_name.push(s4);

    console.log(array_of_student_name);
    document.getElementById("display_students").innerHTML = array_of_student_name;
    document.getElementById("btnsubmit").style.display = "none";
    document.getElementById("btnsort").style.display = "inline-block";

    
  
}
  

function sort()
{
    array_of_student_name.sort();
    console.log(array_of_student_name);

    document.getElementById("display_students").innerHTML = array_of_student_name;
}
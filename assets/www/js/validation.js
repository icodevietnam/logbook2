$(document).ready(function(){

    var d = new Date();
    var dateNow = d.getDate() + "-" +(d.getMonth()+1) + "-" +(d.getYear()+1900);
    var timeNow = d.getHours()+":"+d.getMinutes();
    var activityName = "";
    var location = "";
    var time = "";
    var date = "";
    var reporterName = "";
    var dateRegex = "/^(?:(0[1-9]|1[012])[\/.](0[1-9]|[12][0-9]|3[01])[\/.](19|20)[0-9]{2})$/";
    //var timeRegex = "^\\d{2}:\\d{2}$";
    $("#date").val(dateNow);
    $("#time").val(timeNow);

    $("#activityName").change(function(){
        activityName = $("#activityName").val();
        if(activityName.length > 0){
            $(".error-activity-name").html("");
        }else{
            $(".error-activity-name").html("Activity Name is not blank.");
        }
    });

    $("#location").change(function(){
            location = $("#location").val();
            if(location.length > 0){
                $(".error-location").html("");
            }else{
                $(".error-location").html("Location is not blank.");
            }
    });

    $("#time").change(function(){
                time = $("#time").val();
                if(time.length > 0){
                    $(".error-time").html("");
                }else{
                    $(".error-time").html("Time is not blank.");
                }
        });

    $("#date").change(function(){
                date = $("#date").val();
                if(date.length > 0){
                    $(".error-date").html("");
                }else{
                    $(".error-date").html("Date is not blank.");
                }
        });

    $("#reporterName").change(function(){
                reporterName = $("#reporterName").val();
                if(reporterName.length > 0){
                    $(".error-reporter").html("");
                }else{
                    $(".error-reporter").html("Reporter Name is not blank.");
                }
        });


    $("#btnSubmit").click(function(){
        activityName = $("#activityName").val();
        location = $("#location").val();
        time = $("#time").val();
        date = $("#date").val();
        reporterName = $("#reporterName").val();
        var isValidate = false;

        if(activityName.length > 0 && location.length > 0 && time.length > 0 && date.length > 0 && reporterName.length > 0){
            isValidate = true;
        }else{
            isValidate = false;
        }

        if(isValidate){
            alert("Validation Success");
        }else{
            alert("Validation Fail");
        }

    });
});
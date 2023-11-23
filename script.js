$("#result").hide();

$("input").on("change", function () {
    let username = $(this).val();
    if (username) {
        $.ajax(`https://api.github.com/users/${username}`, {
            success: function (result) {
                let dateString = result.created_at;
                let date = new Date(dateString);
                $("#result").show();
                $("#result").html(`
                    <h3>${result.login}</h3>
                    <img src="${result.avatar_url}">
                    <a href="${result.html_url}" target="_blank">Profile</a>
                    <p>
                        ${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getFullYear()}
                    </p>
                    <p>
                    ${date.getHours().toString().padStart(2, "0")}:${(date.getMinutes()).toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}
                    </p>
                `)
            }
        })
    } else {
        $("#result").empty();
        $("#result").hide();
    }
})

let answers = ["test1", "test2"];
let div = document.createElement("div");
div.className = "list";

let object = {
    "firstName": "Jack"
};

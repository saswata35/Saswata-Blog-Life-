document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".btn-read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            const cardBody = this.closest(".card-body");
            const shortText = cardBody.querySelector(".short-text");
            const fullText = cardBody.querySelector(".full-text");

            if (fullText.style.display === "none") {
                fullText.style.display = "block"; // Show full text
                shortText.style.display = "none"; // Hide short text
                this.textContent = "Read Less";  // Update button text
            } else {
                fullText.style.display = "none"; // Hide full text
                shortText.style.display = "block"; // Show short text
                this.textContent = "Read More";  // Revert button text
            }
        });
    });
});
function toggleLike() {
    var likeBtn = document.getElementById('like_btn1');
    var replyCount = document.getElementById('reply_count_1');

    // Toggle between "Like" and "Liked"
    if (likeBtn.innerHTML === "Like") {
        likeBtn.innerHTML = "Liked"; // Change to "Liked"
        likeBtn.style.backgroundColor = "#ff4d4d"; // Change button color to indicate it's liked
        likeBtn.style.color = "#fff"; // Change text color
        replyCount.innerHTML = parseInt(replyCount.innerHTML) + 1; // Increase the number of replies (you can adjust this part as per your requirement)
    } else {
        likeBtn.innerHTML = "Like"; // Revert back to "Like"
        likeBtn.style.backgroundColor = "#007bff"; // Revert back to the original color
        likeBtn.style.color = "#fff"; // Revert text color
        replyCount.innerHTML = parseInt(replyCount.innerHTML) - 1; // Decrease the number of replies (optional)
    }
}

// Similar toggle for the second like button (if you need it)
function toggleLike1() {
    var likeBtn = document.getElementById('like_btn2');
    var replyCount = document.getElementById('reply_count_2');

    // Toggle between "Like" and "Liked"
    if (likeBtn.innerHTML === "Like") {
        likeBtn.innerHTML = "Liked"; // Change to "Liked"
        likeBtn.style.backgroundColor = "#ff4d4d"; // Change button color to indicate it's liked
        likeBtn.style.color = "#fff"; // Change text color
        replyCount.innerHTML = parseInt(replyCount.innerHTML) + 1; // Increase the number of replies (optional)
    } else {
        likeBtn.innerHTML = "Like"; // Revert back to "Like"
        likeBtn.style.backgroundColor = "#007bff"; // Revert to the original color
        likeBtn.style.color = "#fff"; // Revert text color
        replyCount.innerHTML = parseInt(replyCount.innerHTML) - 1; // Decrease the number of replies (optional)
    }
}

// Toggle function for the third like button
function toggleLike2() {
    var likeBtn = document.getElementById('like_btn');
    var replyCount = document.getElementById('reply_count_3');

    // Toggle between "Like" and "Liked"
    if (likeBtn.innerHTML === "Like") {
        likeBtn.innerHTML = "Liked"; // Change to "Liked"
        likeBtn.style.backgroundColor = "#ff4d4d"; // Change button color to indicate it's liked
        likeBtn.style.color = "#fff"; // Change text color
        replyCount.innerHTML = parseInt(replyCount.innerHTML) + 1; // Increase the number of replies (optional)
    } else {
        likeBtn.innerHTML = "Like"; // Revert back to "Like"
        likeBtn.style.backgroundColor = "#007bff"; // Revert to the original color
        likeBtn.style.color = "#fff"; // Revert text color
        replyCount.innerHTML = parseInt(replyCount.innerHTML) - 1; // Decrease the number of replies (optional)
    }
}
function toggleReplies(replyId) {
    const replySection = document.getElementById(replyId);
    if (replySection.style.display === "none" || replySection.style.display === "") {
        replySection.style.display = "block";
    } else {
        replySection.style.display = "none";
    }
}
// Toggle visibility of the reply section
document.querySelectorAll(".left_div__reply").forEach((button, index) => {
button.addEventListener("click", function () {
const replySection = document.getElementById(`reply${index + 1}`);
if (replySection.style.display === "none" || replySection.style.display === "") {
    replySection.style.display = "block";
} else {
    replySection.style.display = "none";
}
});
});
function addComment(blogId) {
    // Get input values
    var name = document.getElementById(`user-name-${blogId}`).value;
    var comment = document.getElementById(`user-comment-${blogId}`).value;

    if (!name || !comment) {
        alert("Please enter both your name and comment!");
        return;
    }

    // Get current date and time
    var currentDate = new Date();
    var timestamp = currentDate.toLocaleString(); // Format: MM/DD/YYYY, HH:MM:SS AM/PM

    // Create comment object
    var newComment = {
        name: name,
        comment: comment,
        timestamp: timestamp,
    };

    // Retrieve existing comments from localStorage
    var comments = JSON.parse(localStorage.getItem(`comments-${blogId}`)) || [];

    // Add new comment to the list
    comments.push(newComment);

    // Save updated comments back to localStorage
    localStorage.setItem(`comments-${blogId}`, JSON.stringify(comments));

    // Append the new comment to the DOM
    var commentSection = document.getElementById(`comments-display-${blogId}`);
    var commentDiv = document.createElement("div");
    commentDiv.innerHTML = `<p><strong>${name}</strong> <span class="text-muted">${timestamp}</span><br>${comment}</p>`;
    commentSection.appendChild(commentDiv);

    // Clear the input fields
    document.getElementById(`user-name-${blogId}`).value = "";
    document.getElementById(`user-comment-${blogId}`).value = "";

    // Show success alert
    alert("Comment added successfully!");
}
function loadComments(blogId) {
    var comments = JSON.parse(localStorage.getItem(`comments-${blogId}`)) || [];
    var commentSection = document.getElementById(`comments-display-${blogId}`);
    comments.forEach(comment => {
        var commentDiv = document.createElement("div");
        commentDiv.innerHTML = `<p><strong>${comment.name}</strong> <span class="text-muted">${comment.timestamp}</span><br>${comment.comment}</p>`;
        commentSection.appendChild(commentDiv);
    });
}

// Call loadComments for each blog
document.addEventListener("DOMContentLoaded", function () {
    loadComments(1);
    loadComments(2);
    loadComments(3);
});

function handleSubscribe() {
    // Get the email address from the input field
    var email = document.getElementById("email").value;

    // Check if the email address is valid (you can add more validation here)
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    // Simulate sending a confirmation email (replace with actual email sending logic)
    alert("You have subscribed with email: " + email);
    // Send an email to the user with a confirmation message

    // Optionally, you can disable the button to prevent multiple submissions
    document.getElementById("subscribeButton").disabled = true;
}
function handleSubscribe() {
    // Get the email address from the input field
    var email = document.getElementById("email").value;

    // Check if the email address is valid (you can add more validation here)
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    // Send the email confirmation (replace with actual email sending logic)
    sendEmailConfirmation(email);

    // Optionally, you can disable the button to prevent multiple submissions
    document.getElementById("subscribeButton").disabled = true;
}

// Function to send the email confirmation (replace with your actual email sending logic)
function sendEmailConfirmation(toEmail) {
    // Email configuration
    var fromEmail = "your_email@example.com"; // Replace with your email address
    var subject = "Subscription Confirmation";
    var message = "Thank you for subscribing! You will now receive updates from our blog.";

    // Create a URL to trigger the email sending (replace with your actual server-side script)
    var url = "https://your-server.com/send_email.php?to=" + toEmail + "&subject=" + encodeURIComponent(subject) + "&message=" + encodeURIComponent(message);

    // Use AJAX to send the request to the server-side script
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert("Confirmation email sent successfully!");
        } else {
            alert("Failed to send email confirmation.");
        }
    };
    xhr.send();
}


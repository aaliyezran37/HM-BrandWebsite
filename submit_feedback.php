<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>H&M-kppn.com</title>
    <link rel="stylesheet" href="style.css">
    <script src="sciptH&M.js" defer></script>
    <link rel="icon" href="Assets/H&M-Logo.svg.png">
</head>
<body>
    <header>
    <a href="H&M1.html">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/188px-H%26M-Logo.svg.png" alt="H&M Logo" style="width:176px;height: 99px;">

    </a>
    <p class="inspirational-quote">
                    "Don't look back <br>you're not going&nbsp;that&nbsp;way."
                </p>

    <nav>
        <div class="nav-links">
            <a href="#">Women</a>
            <a href="#">Men</a>
            <a href="#">Children</a>
            <a href="#">Sport</a>
            <a href="AboutUs-h&m (1).html">About Us</a>
            <a href="ContactUs.html">Contact Us</a>
                <div class="dropdown">
                   <span>More</span>
                    <div class="dropdown-content">
                      <a href="MapStore.html">
                          <p>Location Map</p>
                      </a>
                      <a href="Inquiry.html">
                        <p>Inquiry Form</p>
                    </a>
                    <a href="Chart.html">
                        <p>Size Charts</p>
                    </a>
                    <a href="FAQ.html">
                        <p>FAQ's</p>
                    </a>
                    </div>
                </div>        
       </div >
        <div class="searchbar">
            <input type="text" placeholder="Search..." class="search-input">
            <button type="submit" class="search-button">
                <a href="Search.html">🔍</a>
            </button>
        </div>
    </nav>
    <hr>
    </header>
    <div class="form-container">
        <h2> Our Inquiry Form if you have any problems. </h2>
    <h4>We would love to hear your thoughts or feedback on how we can improve your experience!</h4>
    

    <form id="feedbackForm" action="submit_feedback.php" method="POST" onsubmit="return handleSubmit()">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required> <br />

        <label for="feedback-type">Feedback Type:</label>
        <select id="feedback-type" name="feedback-type" required>
            <option value="complaints">Complaints</option>
            <option value="questions">Questions</option>
            <option value="bug-report">Bug Report</option>
            <option value="product-inquiries">Product Inquiries</option>
            <option value="others">Others</option>
        </select> <br />

        <label for="feedback">Feedback:</label>
        <textarea id="feedback" name="feedback" rows="4" required></textarea> <br />

        <label for="suggestion">Suggestion for improvement:</label>
        <textarea id="suggestion" name="suggestion" rows="4"></textarea> <br />

        <label for="website-rating">Rate our website (out of 10):</label>
        <input type="number" id="website-rating" name="website-rating" min="0" max="10" required>

        <label for="product-rating">Rate our product (out of 10):</label>
        <input type="number" id="product-rating" name="product-rating" min="0" max="10" required> <br /><br /><br /><br />

        <button type="submit">Submit Feedback</button>
        <?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitize and collect form inputs
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $feedback_type = filter_input(INPUT_POST, 'feedback-type', FILTER_SANITIZE_STRING);
    $feedback = filter_input(INPUT_POST, 'feedback', FILTER_SANITIZE_STRING);
    $suggestion = filter_input(INPUT_POST, 'suggestion', FILTER_SANITIZE_STRING);
    $website_rating = filter_input(INPUT_POST, 'website-rating', FILTER_VALIDATE_INT);
    $product_rating = filter_input(INPUT_POST, 'product-rating', FILTER_VALIDATE_INT);
    
    // Check if required inputs are valid
    if (!$email || !$feedback_type || !$feedback || !$website_rating || !$product_rating) {
        echo "Error: Please make sure all required fields are filled out correctly.";
        exit;
    }

    // Example of processing form data (e.g., saving it to a file or database)
    // This is just an example, modify it according to your needs
    $feedback_data = [
        "email" => $email,
        "feedback_type" => $feedback_type,
        "feedback" => $feedback,
        "suggestion" => $suggestion,
        "website_rating" => $website_rating,
        "product_rating" => $product_rating
    ];

    // Convert feedback data to a JSON string for storage
    $json_data = json_encode($feedback_data);

    // Save the feedback to a file (could also be sent to a database)
    $file = 'feedback_data.txt';
    if (file_put_contents($file, $json_data . PHP_EOL, FILE_APPEND)) {
        echo "Thank you for your feedback!";
    } else {
        echo "Error: Unable to save your feedback.";
    }
    
} else {
    echo "Error: Form was not submitted correctly.";
}
?>
    </form>
</div>
<footer>
        <h2 align="centered">  CALL US FOR INQUIRIES : 1800 180 032 </h2>
        <h4> Last Modified&#58; <pre id="update"></pre>
        <h2> Our Social Media </h2>
        <div class="contacts">
            <p> <a href="https://www.facebook.com/hm/" target="_blank"> <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/900px-2023_Facebook_icon.svg.png"></a>
            <a href="https://www.instagram.com/hm/?hl=en" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/225px-Instagram_logo_2022.svg.png"></a> 
            <a href="https://x.com/hmmalaysia?lang=en" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/150px-X_logo_2023.svg.png"></a>
            <a href="https://tiktok.com/@hm?lang=en" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/330px-TikTok_logo.svg.png"></a></p>
        </div>
        <p> &copy;2024 H&M Malaysia </p>
    </footer>
    <script>
    function clr(){
        document.body.classList.toggle("dark-mode");
    }
    document.getElementById("update").innerHTML = document.lastModified;


    </script>

</body>
</html>


# wdh
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LEGO Store</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="style.css" type="text/css"/>

</head>
<body>
    <!-- Header -->
    
        <div class="container">
            <div class="logo">LEGO</div>
            <nav class="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div class="search">
                <input type="text" id="search-box" placeholder="Search...">
                <button id="search-button">🔍</button>
            </div>
        </div>
    

    <!-- Main Section -->
    <main>
        <section class="hero">
            <h1>Welcome to the LEGO Universe!</h1>
            <p>Explore our wide range of products for builders of all ages.</p>
        </section>

        <section class="products">
            <h2>Popular Products</h2>
            <div class="product-list" id="product-list">
                <!-- Products will be dynamically inserted here -->
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <p>© 2024 LEGO Group. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>

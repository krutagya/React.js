function newstyle() {
    return (
<>
    <form id="purchase-form">
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your Name" required>

        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" placeholder="Enter your Email" required>

        <label for="mobile">Mobile Number:</label>
        <input type="tel" id="mobile" name="mobile" placeholder="Enter mobile number" required>
        <button type="submit">Submit</button>
    </form>
</>              
            )
}

function generatePrompt(){

let name = document.getElementById("name").value;
let type = document.getElementById("type").value;
let location = document.getElementById("location").value;
let audience = document.getElementById("audience").value;
let services = document.getElementById("services").value;
let tone = document.getElementById("tone").value;

let prompt = `You are an expert website copywriter.

Generate homepage copy for:

Business Name: ${name}
Business Type: ${type}
Location: ${location}
Target Audience: ${audience}
Services: ${services}
Tone: ${tone}

Structure:
1. Hero Section
2. About Section
3. Services
4. Why Choose Us
5. Testimonials
6. CTA

Make it clear, persuasive and suitable for a real business website.
`;

document.getElementById("output").value = prompt;

}
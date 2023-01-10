 // Get the form and input elements
 const form = document.querySelector('#libform');
 const nounInput = document.querySelector('#noun');
 const adjectiveInput = document.querySelector('#adjective');
 const personInput = document.querySelector('#person');
 const verbInput = document.querySelector('#verb');
 const placeInput = document.querySelector('#place');
 const story = document.querySelector('#story');

 // Add a submit event listener to the form
 form.addEventListener('submit', (event) => {
     // Prevent the default form submission behavior
     event.preventDefault();

     // Get the input values
     const noun = nounInput.value;
     const adjective = adjectiveInput.value;
     const person = personInput.value;
     const verb = verbInput.value;
     const place = placeInput.value;

     // Make sure the input values are not empty
     if (noun === '' || adjective === '' || person === '' || verb === '' || place === '') {
         alert('Please fill out all the input fields');
         return;
     }

     // Generate the story using the input values
     const storyText = `One day, ${person} was walking through the ${place} when they stumbled upon a ${adjective} ${noun}. They couldn't resist the temptation to ${verb} it, and as a result, they had a great time.`;

     // Display the story in the story element
     story.textContent = storyText;
 });
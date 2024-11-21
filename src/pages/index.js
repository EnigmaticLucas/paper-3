import React, { useState } from 'react';

const MyForm = () => {
  const [name, setName] = useState('');
	
	
  const numFax = (num) => {
	var parity;
	var threevenness;
	var sign;
	var primality;
	var opposite = num * -1;
	var reciprocal = 1 / num;

	if(num % 2 == 0) {
		parity = "Even";
	}
	else if(num % 1 == 0) {
		parity = "Odd";
	}
	else {
		parity = "N/A";
	}

	if(num % 3 == 0) {
		threevenness = "Threeven";
	}
	else if(num % 3 == 1 || num % 3 == 2 || num % 3 == -1 || num % 3 == -2) {
		threevenness = "Throdd";
	}
	else {
		threevenness = "N/A";
	}

	if(num > 0) {
		sign = "Positive";
	}
	else if(num == 0) {
		sign = "Zero";
	}
	else {
		sign = "Negative";
	}

	if(num >= 0 && num % 1 == 0) {
		for(var i = 2; i < num; i++) {
			if(num % i == 0) {
				primality = "Composite";
			} 
		}
	}
	else if(num % 1 == 0) {
		primality = "Prime";
	}
	else {
		primality = "N/A";
	}

	
  }
  const handleChange = (event) => {
	console.log("pepsi");
    	setName(event.target.value);
	numFax(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Name:', name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Please insert a number:   
        <input type="text" value={name} onChange={handleChange}/>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
export default MyForm;
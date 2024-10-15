# Working with Forms & User Input
***It’s Trickier Than It Might Seem***

- What’s **Difficult** About Forms?
- Handling **Form Submission** & **Validating** User Input
- Using **Built-in** Form Features
- Building **Custom** Solutions

**What’s So Difficult?**

**<ins>Form Submission</ins>**

- Handling submission is relatively ***easy***
- Entered values can be managed via ***state***
- Alternatively, they can be extracted via ***refs***
- Or via ***FormData*** and native browser features

**<ins>Input Validation</ins>**

- Providing a good user experience is ***tricky***
- You can ***validate*** on every ***keystroke*** → errors may be shown ***too early***
- You can ***validate*** on ***lost focus*** → errors may be shown ***too long***
- You can ***validate*** on ***form submission*** → errors may be shown ***too late***

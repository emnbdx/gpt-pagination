# gpt-pagination
Bench GPT3.5 and GPT4 in code generation

## My ChatGPT3.5 ask
- Provide me with an example of code that displays this type of JSON in a nice way (using a CSS framework): {[{ "id": 0, "label": "nice", "quantity": 8}]} while using pagination and a templating language.
- Great, can you generate a backend API for me to get the data from a database?
- I think some unit testing wouldn't hurt, would it?
- Okay, thank you. Regarding the code, can you show me the structure of the entire project and its files?
- Can you give me the contents of all the files?
- How do I launch the backend and frontend?

## My ChatGPT4 ask
- Provide me with an example of code that displays this type of JSON in a nice way (using a CSS framework): {[{ "id": 0, "label": "nice", "quantity": 8}]} while using pagination and a templating language.
- Great, can you generate a backend API for me to get the data from a database?
- Can you modify the frontend code to efficiently handle pagination?
- I don't want to change the library, but I want a page change to make an API call rather than an initial global load.
- I think some unit testing wouldn't hurt, would it?
- Okay, thank you. Regarding the code, can you show me the structure of the entire project and its files?
- Can you give me the contents of all the files?
- Can you provide me with a method to populate my database with sample data?


## Explanation
Both cases have some specificities based on my observations. GPT-3.5 uses Laravel, which I am not familiar with, so I asked for guidance on how to set everything up. GPT-4 provided me with incorrect pagination, overlooked the templating language throughout the questions, and did not populate the database.

All the files in this repository are the final results produced by these inquiries:
- Okay, thank you. Regarding the code, can you show me the structure of the entire project and its files?
- Can you give me the contents of all the files?


## Result
GPT3.5 version don't work 😿
-> some error with laravel
GPT4 version work 💪
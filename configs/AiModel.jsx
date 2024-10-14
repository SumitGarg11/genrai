/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",    
    //  text/plain
  };
  
  
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "{\n  \"course\": {\n    \"name\": \"Python Programming for Beginners\",\n    \"description\": \"This course provides a comprehensive introduction to Python programming, covering the fundamentals of the language, essential concepts, and practical examples. You will learn how to write basic Python programs, manipulate data, work with loops and conditions, and understand fundamental programming concepts.\",\n    \"chapters\": [\n      {\n        \"name\": \"Introduction to Python\",\n        \"about\": \"This chapter introduces the Python programming language, its history, and its key features. You will learn how to install Python and set up your development environment.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Variables and Data Types\",\n        \"about\": \"This chapter explores different data types in Python, including numbers, strings, and booleans. You will learn how to declare variables, assign values, and perform basic operations.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Control Flow and Operators\",\n        \"about\": \"This chapter delves into control flow statements such as conditional statements (if-else) and loops (for, while). You will learn how to write programs that execute different blocks of code based on conditions.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Functions and Modules\",\n        \"about\": \"This chapter introduces functions, which are reusable blocks of code, and modules, which contain pre-written functions. You will learn how to define, call, and import functions and modules.\",\n        \"duration\": \"15 minutes\"\n      },\n      {\n        \"name\": \"Introduction to Data Structures\",\n        \"about\": \"This chapter provides an overview of basic data structures like lists, tuples, and dictionaries. You will learn how to create, manipulate, and access data within these structures.\",\n        \"duration\": \"15 minutes\"\n      }\n    ],\n    \"category\": \"Programming\",\n    \"topic\": \"Python\",\n    \"level\": \"Basic\",\n    \"duration\": \"1 hour\",\n    \"noOfChapters\": 5\n  }\n} giveme like this \n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course\": {\n    \"name\": \"Python Programming for Beginners\",\n    \"description\": \"This course provides a comprehensive introduction to Python programming, covering the fundamentals of the language, essential concepts, and practical examples. You will learn how to write basic Python programs, manipulate data, work with loops and conditions, and understand fundamental programming concepts.\",\n    \"chapters\": [\n      {\n        \"name\": \"Introduction to Python\",\n        \"about\": \"This chapter introduces the Python programming language, its history, and its key features. You will learn how to install Python and set up your development environment.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Variables and Data Types\",\n        \"about\": \"This chapter explores different data types in Python, including numbers, strings, and booleans. You will learn how to declare variables, assign values, and perform basic operations.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Control Flow and Operators\",\n        \"about\": \"This chapter delves into control flow statements such as conditional statements (if-else) and loops (for, while). You will learn how to write programs that execute different blocks of code based on conditions.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Functions and Modules\",\n        \"about\": \"This chapter introduces functions, which are reusable blocks of code, and modules, which contain pre-written functions. You will learn how to define, call, and import functions and modules.\",\n        \"duration\": \"15 minutes\"\n      },\n      {\n        \"name\": \"Introduction to Data Structures\",\n        \"about\": \"This chapter provides an overview of basic data structures like lists, tuples, and dictionaries. You will learn how to create, manipulate, and access data within these structures.\",\n        \"duration\": \"15 minutes\"\n      }\n    ],\n    \"category\": \"Programming\",\n    \"topic\": \"Python\",\n    \"level\": \"Basic\",\n    \"duration\": \"1 hour 10 minutes\", \n    \"noOfChapters\": 5\n  }\n}\n```\n\nI have updated the \"duration\" field to \"1 hour 10 minutes\" because the total duration of the chapters adds up to 90 minutes. \n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
    
 
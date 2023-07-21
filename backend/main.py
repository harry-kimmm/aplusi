import os
from typing import Union
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import openai


app = FastAPI()
openai.api_key = os.getenv("OPENAI_API_KEY")

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": openai.Model.list()}


@app.get("/chat/{topic}")
def get_question(topic: str):
    # questions  = []
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": f"Give me a list 10 multiple choice problems for {topic}. Make it with html elements and for each problem give the choices A, B, C, and D. Do not implement any form of submission. Do not say anything else and only write out the componenets in html as asked. Do not include any headers."}
        ]
    )
    print(completion)
    return completion["choices"][0]["message"]["content"]
# Backend server
FastAPI and Python 3.11

## Getting Started
1. Install Python 3.11.3 by using one of the files at the bottom of [this page](https://www.python.org/downloads/release/python-3113/)
2. After installing, verify you have `python-3.11`: `ls /usr/local/bin`
3. Create a Python venv for this project using 3.11: `/usr/local/bin/python3.11 -m venv venv_aplusi`
4. Activate your Python virtual environment for this project: `source venv_aplusi/bin/activate`
5. Once your venv is active, `pip install -r requirements.txt` to install this project's python dependencies.
6. `cd` into the repo root `a-plus-i`
7. Add your OpenAI api key to a file at `.secrets/openai`
8. Export your key as an environment variable: `export OPENAI_API_KEY=$(cat .secrets/openai)`
9. `cd` into the `backend`
10. Start the local backend server: `uvicorn main:app --reload`
%**
#!/usr/local/bin/python3
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import settings # import settings (credentials)
# Following pseudo-code will be similar for other api calls/implementations
# 	1. find element name (i.e; <input name='username'>)
# 	2. invoke webdriver methods (i.e; browser.find_element_by_name('username'))
# 	3. click on a event (i.e; login.click())
canvas_url=settings.LINK # canvas url link in settings.py
username=settings.USER # login username in settings.py
password=settings.PASS # login password in settings.py
html_username="username" # html element <input name='username'>
html_password="password" # html element <input name='password'>
html_submit="submit" # html element <input name='submit'>
browser = webdriver.Safari() # selenium webdriver for safari browser
browser.get((canvas_url)) # 'Allow Remote Automation' in Safari (developer)
# try block to automate login python script
try:
	# find input username field in browser
	input_username = browser.find_element_by_name(html_username)
	# invoke send_keys with username credential to field
	input_username.send_keys(username)
	# find input password field in browser
	input_password = browser.find_element_by_name(html_password)
	# invoke send_keys with password credential to field
	input_password.send_keys(password)
	# find input submit button in browser
	login = browser.find_element_by_name(html_submit)
	# invoke click to submit login credentials
	login.click()
except Exception:
	print("LOGIN FAILED")
# How to run Python script:
# reference: https://www.selenium.dev/documentation/en/getting_started/
#	1. `pip install selenium` & properly set path 
#	2. Include correct credentials (URL,USER,PASS) in settings.py
#	3. Only MacOS, Safari browser -> Develop -> Allow Remote Automation
#	4. In terminal, $ python3 canvas.py
%**

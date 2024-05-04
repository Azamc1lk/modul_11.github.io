from aiogram import Bot
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton, ReplyKeyboardMarkup, KeyboardButton, WebAppInfo

web_app = WebAppInfo(url="https://azamc1lk.github.io/modul_11.github.io/")

app_ikb = ReplyKeyboardMarkup(keyboard=[
    [KeyboardButton(text='Mini app', web_app=web_app)]
], resize_keyboard=True)

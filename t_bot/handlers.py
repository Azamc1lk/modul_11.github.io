from aiogram import Dispatcher,types
from aiogram.filters import CommandStart

from t_bot.keyboards import app_ikb

dp= Dispatcher()

@dp.message(CommandStart())
async def start(msg:types.Message):
    await msg.answer("Salom",reply_markup=app_ikb)
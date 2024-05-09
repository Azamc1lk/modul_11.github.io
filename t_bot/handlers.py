from aiogram import Dispatcher, types, F
from aiogram.filters import CommandStart

from t_bot.keyboards import app_ikb

dp = Dispatcher()


@dp.message(CommandStart())
async def start(msg: types.Message):
    await msg.answer("Salom", reply_markup=app_ikb)


@dp.message(F.func(lambda msg: msg.web_app_data.data == "TestMessage"))
async def get_btn(msg: types.Message):
    await msg.answer(msg.web_app_data.data)

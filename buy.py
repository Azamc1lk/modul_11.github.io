import os
from aiogram import Bot
from aiogram.types import Message, LabeledPrice,PreCheckoutQuery

from dotenv import load_dotenv

load_dotenv()
PROVIDER_TOKEN = os.getenv('PROVIDER_TOKEN')


async def oreder(msg: Message, bot: Bot):
    await bot.send_invoice(
        chat_id=msg.chat.id,
        title="Telegram bot orqali tolov!",
        description="Telegram bot orqalitolov qilishni organamiz!",
        provider_token=PROVIDER_TOKEN,
        currency="sum",
        payload="Ichki malumot",
        prices=[
            LabeledPrice(label="Skidka", amount=-2),
            LabeledPrice(label="Bonus", amount=-1)
        ]
    )
async def pre_chackout(pre_checkout_query: PreCheckoutQuery,bot:Bot) :
    await bot.answer_callback_query(pre_checkout_query.id,ok=True)

require('dotenv').config()
const { Bot, GrammyError, HttpError, InlineKeyboard } = require('grammy');

const bot = new Bot(process.env.API_KEY);





//СПИСОК ДОСТУПНЫХ КОМАНД

bot.api.setMyCommands([
    {
        command: 'start',
        description: 'Запуск бота',
    },
]);






//ВСЕ КОЛБЭКИ И КОМАНДЫ

bot.command('start', async (ctx) => {
    const inlineKeyboard = new InlineKeyboard()

    .text('Бесплатная группа (бесплатно)', '#1')
    .row()
    .text('Индивидуально (1000рублей)', '#2');


console.log(ctx.from), await ctx.reply('<b>🎰ПРЕДСТАВЬТЕ СЕБЕ МИР ГДЕ УДАЧА ВСЕГДА НА ВАШЕЙ СТОРОНЕ!💲</b>\n\nЯ – бывший член <i>ЭЛИТНОЙ</i> команды профессионалов по сбору данных для онлайн-казино💰🤑\n\nИ я здесь, чтобы поделиться секретом, который изменит вашу игру навсегда✨!\n\nПозвольте представить вам стратегию, которая работает с ошеломляющей точностью 97,6%!🎉\n\nЭта стратегия сделает вашу игру в "Lucky Jet" по-настоящему захватывающей и невероятно прибыльной.🤑\n\nГотовы испытать удачу и выиграть больше, чем когда-либо?💰💰💰\n\n<b>Присоединяйтесь к нам и узнайте, как превратить КАЖДУЮ игру в гарантированный успех!</b>🤩🤩🤩', {
    parse_mode: 'HTML',
    reply_markup: inlineKeyboard
})
})

bot.callbackQuery('#2', async (ctx) => {
    await ctx.answerCallbackQuery();
     await ctx.reply('<b>ОТЛИЧНЫЙ ВЫБОР!</b>\n\nНапишите нашему админу канала: https://t.me/inteligg', {
        parse_mode: "HTML"
     })
})

bot.callbackQuery('#1', async (ctx) => {
    await ctx.answerCallbackQuery();
    await ctx.reply('Хорошо, вот ссылка на БЕСПЛАТНЫЙ тг канал: https://t.me/luckyjetsignaliver', {
        
    })
})

























//Маты
bot.hears([/Пиздец/, /пиздец/, /Сука/, /сука/, /Блять/, /блять/, /Бля/, /бля/, /Нахуй/, /нахуй/, /Хуй/, /хуй/, /Соси/, /соси/, /Пидор/, /пидор/, /Шлюха/, /шлюха/], async (ctx) => {
    await ctx.reply('Попрошу вас не выражаться')
})

//сотрудничество
bot.on([':media', ':text', '::url', ':voice'], async (ctx) => {
    await ctx.reply('По вопросам сотрудничества обращайтесь к Администратору канала:    [АДМИН](https://t.me/inteligg)', {
    parse_mode: 'MarkdownV2',
    disable_web_page_preview: false
    });
});





















//ОБРАБОТКА ОШИБОК, ЛУЧШЕ НЕ ТРОГАТЬ, ЕЩЕ НЕ ШАРЮ!

bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
 const e = err.error;

 if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
 } else if (e instanceof HttpError) {
    console.error("could not contact Telegram:", e);
 } else {
    console.error("Unknown error:", e);
 }
});

bot.start();
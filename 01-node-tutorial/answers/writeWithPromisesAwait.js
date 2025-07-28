const { writeFile, readFile } = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "temporary", "temp.txt");

// Это декларирование async функции по имени Writer, она позволяет нам сделать необходимые манипуляции в файловой системе, т.е. сложные задачи действовуют за кулисами и "грузяться" пока легкие задачи "отвлекают" пользователя удерживая его внимание на продукте, чтоб не передумал и не убежал к конкуренту

const writer = async () => {
  // Блок который не стартует без команды вызова функции 'writer()'

  try {
    // Ожидание, говорит, подождем пока закончится эта активность, до того как перейти на другую
    // Await регулятор, гаишник, не дает потоку катиться безпрерывно, организовывая логичгый порядок

    await writeFile(filePath, "First line\n");

    await writeFile(filePath, "Second line\n", { flag: "a" });

    await writeFile(filePath, "Third line\n", { flag: "a" });
    console.log("Finished writing to temp.txt:\n");
  } catch (err) {
    console.log("An error occurred: ", err);
  }
};

const reader = async () => {
  // Функция, что комп прочел созданное первым

  try {
    const data = await readFile(filePath, "utf8"); // Здесь комп читает содержимое файла с помощью помощника Await, чтоб соблюсти порядок
    console.log("File content:\n", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
};

// Это третья async функция, чтоб соблюсти порядок - сначала комплюктер запишет символы в файл, затем прочтет их - и никак иначе.
// Обертыватель, который как раз и регулирует наши 2 async функции, без него они могли стартовать одновременно, создав коллапс

const readWrite = async () => {
  await writer();
  await reader();
};

// Это контролер, позволяет начать активность в нужном нам порядке. Это как Мичман - который бог камбуза на флоте, сначала приготовить, потом кушать, а не наоборот
readWrite();

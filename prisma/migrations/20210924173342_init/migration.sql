-- CreateTable
CREATE TABLE "Players" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "logged_in" BOOLEAN NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Challenges" (
    "id" SERIAL NOT NULL,
    "player_challenging_id" INTEGER NOT NULL,
    "player_challenged_id" INTEGER NOT NULL,

    CONSTRAINT "Challenges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "moves" JSONB NOT NULL DEFAULT E'[]',

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boards" (
    "id" SERIAL NOT NULL,
    "board_info" JSONB NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "game_id" INTEGER NOT NULL,

    CONSTRAINT "Boards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Players_username_key" ON "Players"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Players_email_key" ON "Players"("email");

-- AddForeignKey
ALTER TABLE "Challenges" ADD CONSTRAINT "Challenges_player_challenging_id_fkey" FOREIGN KEY ("player_challenging_id") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Challenges" ADD CONSTRAINT "Challenges_player_challenged_id_fkey" FOREIGN KEY ("player_challenged_id") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boards" ADD CONSTRAINT "Boards_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "Games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

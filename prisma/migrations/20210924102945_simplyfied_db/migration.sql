/*
  Warnings:

  - You are about to drop the column `challenge_id` on the `Games` table. All the data in the column will be lost.
  - The `moves` column on the `Games` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `logged_in` on the `Players` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Games" DROP CONSTRAINT "Games_challenge_id_fkey";

-- DropIndex
DROP INDEX "Games_challenge_id_unique";

-- AlterTable
ALTER TABLE "Games" DROP COLUMN "challenge_id",
DROP COLUMN "moves",
ADD COLUMN     "moves" TEXT[];

-- AlterTable
ALTER TABLE "Players" DROP COLUMN "logged_in";

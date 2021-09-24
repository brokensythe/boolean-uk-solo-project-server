/*
  Warnings:

  - Changed the type of `moves` on the `Games` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `logged_in` to the `Players` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Games" DROP COLUMN "moves",
ADD COLUMN     "moves" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Players" ADD COLUMN     "logged_in" BOOLEAN NOT NULL;

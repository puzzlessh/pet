/*
  Warnings:

  - Added the required column `description` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genres` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `torrents` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "genres" JSONB NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "language" TEXT NOT NULL,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "torrents" JSONB NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;

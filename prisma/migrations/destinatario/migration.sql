-- CreateTable
CREATE TABLE "destinatario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "CEP" TEXT NOT NULL,

    CONSTRAINT "destinatario_pkey" PRIMARY KEY ("id")
);

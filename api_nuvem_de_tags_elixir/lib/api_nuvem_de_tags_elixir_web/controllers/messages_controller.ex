defmodule ApiNuvemDeTagsElixirWeb.MessagesController do
  use ApiNuvemDeTagsElixirWeb, :controller

  def create(conn, params) do
    IO.inspect(params)

    conn
    |> text("Recebi a requisição")
  end
end

defmodule ApiNuvemDeTagsElixirWeb.MessagesView do
  use ApiNuvemDeTagsElixirWeb, :view

  def render("create.json", %{message: message}) do
    %{
      result: "Message created!",
      message: message
    }
  end
end
